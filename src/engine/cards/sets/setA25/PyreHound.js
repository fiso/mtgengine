"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyre Hound", "Masters 25", "A25");
  }
}

module.exports = PyreHound;
