"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QasaliPridemageBase = require("../setARB/QasaliPridemage.js");

class QasaliPridemage extends QasaliPridemageBase {
  constructor(game) {
    super(game, "Qasali Pridemage", "Friday Night Magic", "pFNM");
  }
}

module.exports = QasaliPridemage;
