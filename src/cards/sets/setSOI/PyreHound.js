"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyre Hound", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PyreHound;
