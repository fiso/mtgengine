"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChannelBase = require("../setCED/Channel.js");

class Channel extends ChannelBase {
  constructor(game) {
    super(game, "Channel", "Unlimited Edition", "2ED");
  }
}

module.exports = Channel;
