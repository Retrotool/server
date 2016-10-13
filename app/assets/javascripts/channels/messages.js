App.messages = App.cable.subscriptions.create('MessagesChannel', {
    received: function(data) {
        return $('#messages').append(this.renderMessage(data));
    },

    renderMessage: function(data) {
        console.log(data);
        return '<p>#' + data.card.id + "(" + data.card.title + ") <b>" + data.action + "</b></p>";
    }
});