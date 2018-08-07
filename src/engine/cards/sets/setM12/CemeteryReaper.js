"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryReaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Cemetery Reaper", "Magic 2012", "M12");
  }
}

module.exports = CemeteryReaper;
