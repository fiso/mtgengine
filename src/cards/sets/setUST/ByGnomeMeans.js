"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ByGnomeMeans extends UnimplementedCard {
  constructor (game) {
    super(game, "By Gnome Means", "Unstable", "UST");
  }
}

module.exports = ByGnomeMeans;
