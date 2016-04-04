"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbuJafarBase = require("../setARN/AbuJafar.js");

class AbuJafar extends AbuJafarBase {
  constructor(game) {
    super(game, "Abu Ja'far", "Chronicles", "CHR");
  }
}

module.exports = AbuJafar;
