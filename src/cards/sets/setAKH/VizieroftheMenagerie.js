"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizieroftheMenagerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of the Menagerie", "Amonkhet", "AKH");
  }
}

module.exports = VizieroftheMenagerie;
