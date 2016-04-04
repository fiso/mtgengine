"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaweftSliver extends Card {
  constructor(game) {
    super(game, "Manaweft Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ManaweftSliver;
