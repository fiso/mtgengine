"use strict";
const Constants = require ("../../../Constants");
const QasaliPridemageBase = require("../setARB/QasaliPridemage");

class QasaliPridemage extends QasaliPridemageBase {
  constructor (game) {
    super(game, "Qasali Pridemage", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = QasaliPridemage;
