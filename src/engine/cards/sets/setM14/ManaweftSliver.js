"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaweftSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Manaweft Sliver", "Magic 2014", "M14");
  }
}

module.exports = ManaweftSliver;
