"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DespondentKillbot extends UnimplementedCard {
  constructor (game) {
    super(game, "Despondent Killbot", "Unstable", "UST");
  }
}

module.exports = DespondentKillbot;
