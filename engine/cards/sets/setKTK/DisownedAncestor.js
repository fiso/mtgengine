"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisownedAncestor extends Card {
  constructor(game) {
    super(game, "Disowned Ancestor", "Khans of Tarkir", "KTK");
  }
}

module.exports = DisownedAncestor;
