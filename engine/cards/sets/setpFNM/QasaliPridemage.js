"use strict";
const Constants = require ("../../../Constants");
const QasaliPridemageBase = require("../setARB/QasaliPridemage");

class QasaliPridemage extends QasaliPridemageBase {
  constructor(game) {
    super(game, "Qasali Pridemage", "Friday Night Magic", "pFNM");
  }
}

module.exports = QasaliPridemage;
