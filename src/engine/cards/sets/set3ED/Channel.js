'use strict';
const Constants = require('../../../Constants');
const ChannelBase = require('../setIMA/Channel');

class Channel extends ChannelBase {
  constructor (game) {
    super(game, 'Channel', 'Revised Edition', '3ED');
  }
}

module.exports = Channel;
