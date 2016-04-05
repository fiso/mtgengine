"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyreticRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyretic Ritual", "Magic 2011", "M11");
  }
}

module.exports = PyreticRitual;
