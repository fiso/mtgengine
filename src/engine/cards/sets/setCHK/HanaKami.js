"use strict";
const Constants = require ("../../../Constants");
const HanaKamiBase = require("../setMMA/HanaKami");

class HanaKami extends HanaKamiBase {
  constructor (game) {
    super(game, "Hana Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HanaKami;
