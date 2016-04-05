"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor(game) {
    super(game, "Channel", "Fourth Edition", "4ED");
  }
}

module.exports = Channel;
