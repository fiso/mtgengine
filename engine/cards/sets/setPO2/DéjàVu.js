"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DéjàVuBase = require("../setPOR/DéjàVu.js");

class DéjàVu extends DéjàVuBase {
  constructor(game) {
    super(game, "Déjà Vu", "Portal Second Age", "PO2");
  }
}

module.exports = DéjàVu;
