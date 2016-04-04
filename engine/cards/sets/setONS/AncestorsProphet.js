"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestorsProphet extends Card {
  constructor(game) {
    super(game, "Ancestor's Prophet", "Onslaught", "ONS");
  }
}

module.exports = AncestorsProphet;
