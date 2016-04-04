"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DewdropSpy extends Card {
  constructor(game) {
    super(game, "Dewdrop Spy", "Morningtide", "MOR");
  }
}

module.exports = DewdropSpy;
