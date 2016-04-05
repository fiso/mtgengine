"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadReaper extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread Reaper", "Masters Edition IV", "ME4");
  }
}

module.exports = DreadReaper;
