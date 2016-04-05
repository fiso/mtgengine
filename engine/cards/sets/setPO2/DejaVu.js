"use strict";
const Constants = require ("../../../Constants");
const DejaVuBase = require("../setPOR/DejaVu");

class DejaVu extends DejaVuBase {
  constructor(game) {
    super(game, "Déjà Vu", "Portal Second Age", "PO2");
  }
}

module.exports = DejaVu;
