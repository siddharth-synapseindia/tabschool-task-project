(ns taskproject.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))


  (defn input-component [props]
      [:input.inpt {:type        "text"
                    :value       @props
                    :placeholder "Enter number"
                    :on-change   #(reset! props (-> % .-target .-value))}])

  (defn form-component []
    (let [numOne (r/atom nil)
          numTwo (r/atom nil)
          sum (r/atom nil)]
      (fn []
        [:form
        {:on-submit (fn [e]
                      (.preventDefault e)
                      (reset! sum (+ (js/parseInt @numOne) (js/parseInt @numTwo)))
                      (reset! numOne nil)
                      (reset! numTwo nil))}
        [:h6 "="]
        [:div
          [:div.result
          [:p  {:style {:color (if (> @sum 100) "red" "green")}}
            [:b @sum]]]]
        [:label "Number1: "]
        [input-component numOne]
        [:br]
        [:span "+"]
        [:br]
        [:label "Number2: "]
        [input-component numTwo]
        [:div.clear]
        [:br]
        [:button.btn {:type "submit"} "Submit"]])))

  (defn home-page []
    [:div
    [:div.center
      [:h1.one "Add Two Number"]
      [form-component]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))