"use strict";
const Constants = require ("../../../Constants");
const ChannelBase = require("../setCED/Channel");

class Channel extends ChannelBase {
  constructor (game) {
    super(game, "Channel", "From the Vault: Exiled", "V09");
  }
}

module.exports = Channel;
