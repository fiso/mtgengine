"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnomeMadeEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnome-Made Engine", "Unstable", "UST");
  }
}

module.exports = GnomeMadeEngine;
