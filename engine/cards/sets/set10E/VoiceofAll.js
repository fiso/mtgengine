"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoiceofAllBase = require("../setCMD/VoiceofAll.js");

class VoiceofAll extends VoiceofAllBase {
  constructor(game) {
    super(game, "Voice of All", "Tenth Edition", "10E");
  }
}

module.exports = VoiceofAll;
