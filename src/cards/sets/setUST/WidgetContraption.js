"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WidgetContraption extends UnimplementedCard {
  constructor (game) {
    super(game, "Widget Contraption", "Unstable", "UST");
  }
}

module.exports = WidgetContraption;
