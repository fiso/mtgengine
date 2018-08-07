"use strict";
const Constants = require ("../../../Constants");
const FieldsofSummerBase = require("../setPCA/FieldsofSummer");

class FieldsofSummer extends FieldsofSummerBase {
  constructor (game) {
    super(game, "Fields of Summer", "Planechase", "HOP");
  }
}

module.exports = FieldsofSummer;
