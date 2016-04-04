"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemniteBase = require("../setpMGD/Memnite.js");

class Memnite extends MemniteBase {
  constructor(game) {
    super(game, "Memnite", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Memnite;
