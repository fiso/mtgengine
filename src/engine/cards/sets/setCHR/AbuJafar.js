"use strict";
const Constants = require ("../../../Constants");
const AbuJafarBase = require("../setPRM/AbuJafar");

class AbuJafar extends AbuJafarBase {
  constructor (game) {
    super(game, "Abu Ja'far", "Chronicles", "CHR");
  }
}

module.exports = AbuJafar;
