
module.exports = function(codebox) {
    var workspace = codebox.workspace;
    var events = codebox.events;

    codebox.rpc.service("helloworld", {
        say: function(args) {
            return "HelloWorld, there is "+args.size+" characters in the editor";
        }
    });
};
