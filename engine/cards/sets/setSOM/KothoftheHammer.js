"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KothoftheHammerBase = require("../setDDI/KothoftheHammer.js");

class KothoftheHammer extends KothoftheHammerBase {
  constructor(game) {
    super(game, "Koth of the Hammer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = KothoftheHammer;
