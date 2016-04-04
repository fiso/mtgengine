"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KinsbaileCavalierBase = require("../setDDG/KinsbaileCavalier.js");

class KinsbaileCavalier extends KinsbaileCavalierBase {
  constructor(game) {
    super(game, "Kinsbaile Cavalier", "Morningtide", "MOR");
  }
}

module.exports = KinsbaileCavalier;
