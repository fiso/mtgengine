"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemembertheFallen extends UnimplementedCard {
  constructor (game) {
    super(game, "Remember the Fallen", "New Phyrexia", "NPH");
  }
}

module.exports = RemembertheFallen;
