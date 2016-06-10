"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DewdropSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Dewdrop Spy", "Morningtide", "MOR");
  }
}

module.exports = DewdropSpy;
