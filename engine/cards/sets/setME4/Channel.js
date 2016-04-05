"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor(game) {
    super(game, "Channel", "Masters Edition IV", "ME4");
  }
}

module.exports = Channel;
