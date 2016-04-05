"use strict";
const Constants = require ("../../../Constants");
const RaziaBorosArchangelBase = require("../setHOP/RaziaBorosArchangel");

class RaziaBorosArchangel extends RaziaBorosArchangelBase {
  constructor(game) {
    super(game, "Razia, Boros Archangel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RaziaBorosArchangel;
