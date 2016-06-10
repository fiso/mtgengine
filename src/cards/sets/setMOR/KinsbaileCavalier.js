"use strict";
const Constants = require ("../../../Constants");
const KinsbaileCavalierBase = require("../setDDG/KinsbaileCavalier");

class KinsbaileCavalier extends KinsbaileCavalierBase {
  constructor (game) {
    super(game, "Kinsbaile Cavalier", "Morningtide", "MOR");
  }
}

module.exports = KinsbaileCavalier;
