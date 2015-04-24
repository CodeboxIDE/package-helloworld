var commands = codebox.require("core/commands");
var rpc = codebox.require("core/rpc");
var dialogs = codebox.require("utils/dialogs");

// Create a command
commands.register({
    id: "helloworld.say",
    title: "HelloWorld: Say",
    context: [],
    run: function(args, ctx) {
        var contentSize = (ctx.editor? xtc.editor.getValue().length : "No Editor");
        return rpc.execute('helloworld/say', { size: contentSize })
        .then(function(msg) {
            return dialogs.alert("RPC Message: "+msg);
        });
    }
});

// Add the command in a new menu
codebox.menubar.createMenu({
    id: "hello",
    caption: "HelloWorld",
    items: [
        {
            caption: "Say!",
            command: "helloworld.say"
        }
    ]
});
