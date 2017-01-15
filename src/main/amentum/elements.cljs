(ns amentum.elements
  (:require
   [clojure.string :as s]
   [hoplon.core :as h :refer-macros [defelem for-tpl when-tpl with-dom]]
   [javelin.core :as j :refer [cell] :refer-macros [cell=]]
   [amentum.common :refer [->map]]))

;; Non-UI Elements
(defelem icon [attrs name]
  ((h/i :class (str (first name) " icon")) attrs))
(defelem label [attr kids] ((h/div :class "ui label") attr kids))
(defelem header [attr kids] ((h/div :class "header") attr kids))

;; UI Elements
(defelem segment [attr kids] ((h/div :class "ui segment") attr kids))
(defelem container [attr kids] ((h/div :class "ui container") attr kids))
(defelem buttons [attr kids] ((h/div :class "ui buttons") attr kids))

(defelem h1 [attr kids] ((h/h1 :class "ui header") attr kids))
(defelem h2 [attr kids] ((h/h2 :class "ui header") attr kids))
(defelem h3 [attr kids] ((h/h3 :class "ui header") attr kids))
(defelem h4 [attr kids] ((h/h4 :class "ui header") attr kids))
(defelem h5 [attr kids] ((h/h5 :class "ui header") attr kids))
(defelem h6 [attr kids] ((h/h6 :class "ui header") attr kids))

(defelem button [{:keys [class color href tabindex type]
                  :or {class {}} :as attr} kids]
  ((let [iname (:icon attr)
         tag (cond type h/button href h/a :else h/div)]
     (-> attr
       (dissoc :color :icon)
       (assoc :class (-> {:ui true :button true :icon (and iname (empty? kids))}
                       (cond-> color (assoc (keyword color) true))))
       (tag (when iname (icon iname)))))
   :class class kids))
