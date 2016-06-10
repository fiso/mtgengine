"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentChantZubera extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent-Chant Zubera", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SilentChantZubera;
