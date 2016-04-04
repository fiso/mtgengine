"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalHorrorBase = require("../set7ED/AbyssalHorror.js");

class AbyssalHorror extends AbyssalHorrorBase {
  constructor(game) {
    super(game, "Abyssal Horror", "Starter 1999", "S99");
  }
}

module.exports = AbyssalHorror;
