"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XathridNecromancerBase = require("../setM14/XathridNecromancer.js");

class XathridNecromancer extends XathridNecromancerBase {
  constructor(game) {
    super(game, "Xathrid Necromancer", "Media Inserts", "pMEI");
  }
}

module.exports = XathridNecromancer;
