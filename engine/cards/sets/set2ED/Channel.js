"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor(game) {
    super(game, "Channel", "Unlimited Edition", "2ED");
  }
}

module.exports = Channel;
