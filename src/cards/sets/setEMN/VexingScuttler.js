"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VexingScuttler extends UnimplementedCard {
  constructor (game) {
    super(game, "Vexing Scuttler", "Eldritch Moon", "EMN");
  }
}

module.exports = VexingScuttler;
