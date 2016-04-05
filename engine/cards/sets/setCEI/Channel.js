"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor(game) {
    super(game, "Channel", "International Collector's Edition", "CEI");
  }
}

module.exports = Channel;
