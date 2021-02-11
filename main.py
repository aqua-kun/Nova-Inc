import discord;
from discord.ext import commands;
import os;
import ast;
import dns.resolver;
dns.resolver.default_resolver=dns.resolver.Resolver(configure=False)
dns.resolver.default_resolver.nameservers=['8.8.8.8']

client = commands.Bot(command_prefix=">>", help_command=None, case_insensitive=True, owner_ids=['749221870754070549']);

def insert_returns(body):
    
    if isinstance(body[-1], ast.Expr):
        body[-1] = ast.Return(body[-1].value)
        ast.fix_missing_locations(body[-1])

    
    if isinstance(body[-1], ast.If):
        insert_returns(body[-1].body)
        insert_returns(body[-1].orelse)

    
    if isinstance(body[-1], ast.With):
        insert_returns(body[-1].body)

@client.command(name="eval", aliases=["e"])
@client.is_owner()
async def eval_fn(ctx, *, cmd):
    if(cmd.endswith('-py') == True):
        fn_name = "_eval_expr"
        cmd = cmd.strip("` ")
        __cmd__ = cmd
        cmd = "\n".join(f"    {i}" for i in cmd.splitlines())

        body = f"async def {fn_name}():\n{cmd}"

        parsed = ast.parse(body)
        body = parsed.body[0].body

        insert_returns(body)

        env = {
            'bot': ctx.bot,
            'discord': discord,
            'commands': commands,
            'ctx': ctx,
            '__import__': __import__
        }
        try:
            exec(compile(parsed, filename="<ast>", mode="exec"), env)
            result = (await eval(f"{fn_name}()", env))
            if result is None:
                result = 'None'
            def embed(title, description, footer, color):
                emb = discord.Embed(title=title, description=description, color=color)
                emb.set_footer(text=footer)
                return emb
        
            await ctx.send(embed=embed('', f'Input:\n```py\n{__cmd__}\n```\nOutput:\n```py\n{result}\n```',f'Input type: {type(__cmd__)}\nOutput type: {type(result)}', 0x000000))
        except Exception as e:
            await ctx.send(e)
    else:
        return



client.run("NzgyMTc1MjY1NTk2ODk5Mzcw.X8IXew.73XzL8qL5gGkYdws4Jqz90SBRNA")
