"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoidslimeBase = require("../setpCMP/Voidslime.js");

class Voidslime extends VoidslimeBase {
  constructor(game) {
    super(game, "Voidslime", "Dissension", "DIS");
  }
}

module.exports = Voidslime;
