"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalHorrorBase = require("../set7ED/AbyssalHorror.js");

class AbyssalHorror extends AbyssalHorrorBase {
  constructor(game) {
    super(game, "Abyssal Horror", "Urza's Saga", "USG");
  }
}

module.exports = AbyssalHorror;
