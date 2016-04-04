"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoomedNecromancerBase = require("../setONS/DoomedNecromancer.js");

class DoomedNecromancer extends DoomedNecromancerBase {
  constructor(game) {
    super(game, "Doomed Necromancer", "Tenth Edition", "10E");
  }
}

module.exports = DoomedNecromancer;
