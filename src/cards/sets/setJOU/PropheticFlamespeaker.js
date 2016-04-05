"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PropheticFlamespeaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Prophetic Flamespeaker", "Journey into Nyx", "JOU");
  }
}

module.exports = PropheticFlamespeaker;
