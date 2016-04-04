"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvilPresenceBase = require("../setCED/EvilPresence.js");

class EvilPresence extends EvilPresenceBase {
  constructor(game) {
    super(game, "Evil Presence", "Fourth Edition", "4ED");
  }
}

module.exports = EvilPresence;
