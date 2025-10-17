export interface Vocabulary {
  term: string
  partOfSpeech: string
  translation: string
  example: string
  exampleTranslation: string
}

export interface Skill {
  id: string
  name: string
  icon: string
  exerciseUrls: string[]
}

export interface Unit {
  id: number
  slug: string
  title: string
  description: string
  skills: Skill[]
  vocabulary: Vocabulary[]
}

export interface Course {
  id: string
  slug: string
  name: string
  description: string
  color: string
  units: Unit[]
}

export const courses: Course[] = [
  {
    id: "business-english",
    slug: "ta-tmcb01",
    name: "Tiếng Anh TMCB 1",
    description: "English for business communication and professional settings",
    color: "bg-primary",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Introduction to Business", "Meetings & Presentations", "Email Writing", "Negotiations", "Marketing & Sales", "Finance & Banking", "International Trade", "Business Culture"][i]}`,
      description: `Learn essential business English skills for ${["workplace basics", "effective meetings", "professional emails", "successful negotiations", "marketing strategies", "financial terms", "global trade", "cross-cultural communication"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Professional",
          partOfSpeech: "adj",
          translation: "Chuyên nghiệp",
          example: "He is a professional in his field.",
          exampleTranslation: "Anh ấy là chuyên gia trong lĩnh vực của mình.",
        },
        {
          term: "Communicate",
          partOfSpeech: "v",
          translation: "Giao tiếp",
          example: "Effective communication is key.",
          exampleTranslation: "Giao tiếp hiệu quả là chìa khóa.",
        },
        {
          term: "Workplace",
          partOfSpeech: "n",
          translation: "Nơi làm việc",
          example: "The workplace is where we spend most of our time.",
          exampleTranslation: "Nơi làm việc là nơi chúng ta dành phần lớn thời gian.",
        },
        {
          term: "Efficient",
          partOfSpeech: "adj",
          translation: "Hiệu quả",
          example: "She works very efficiently.",
          exampleTranslation: "Cô ấy làm việc rất hiệu quả.",
        },
        {
          term: "Collaboration",
          partOfSpeech: "n",
          translation: "Sự hợp tác",
          example: "Collaboration is essential for success.",
          exampleTranslation: "Sự hợp tác là điều cần thiết cho thành công.",
        },
      ],
    })),
  },
  {
    id: "technical-english",
    slug: "ta-tmcb02",
    name: "Tiếng Anh TMCB 2",
    description: "English for engineering and technical fields",
    color: "bg-secondary",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Technical Basics", "Engineering Processes", "Technical Documentation", "Safety Procedures", "Project Management", "Quality Control", "Innovation & Design", "Technical Support"][i]}`,
      description: `Master technical English for ${["fundamental concepts", "engineering workflows", "writing manuals", "workplace safety", "managing projects", "quality assurance", "creative solutions", "customer support"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Technical",
          partOfSpeech: "adj",
          translation: "Kỹ thuật",
          example: "The technical team will handle this issue.",
          exampleTranslation: "Đội ngũ kỹ thuật sẽ xử lý vấn đề này.",
        },
        {
          term: "Engineering",
          partOfSpeech: "n",
          translation: "Kỹ thuật",
          example: "Engineering requires precision.",
          exampleTranslation: "Kỹ thuật đòi hỏi độ chính xác.",
        },
        {
          term: "Process",
          partOfSpeech: "n",
          translation: "Quá trình",
          example: "The manufacturing process is automated.",
          exampleTranslation: "Quá trình sản xuất được tự động hóa.",
        },
        {
          term: "System",
          partOfSpeech: "n",
          translation: "Hệ thống",
          example: "The new system improves efficiency.",
          exampleTranslation: "Hệ thống mới cải thiện hiệu quả.",
        },
        {
          term: "Specification",
          partOfSpeech: "n",
          translation: "Thông số kỹ thuật",
          example: "The specification for the product is detailed.",
          exampleTranslation: "Thông số kỹ thuật cho sản phẩm rất chi tiết.",
        },
      ],
    })),
  },
  {
    id: "medical-english",
    slug: "ta-tmcb03",
    name: "Tiếng Anh TMCB 3",
    description: "English for healthcare and medical professionals",
    color: "bg-accent",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Medical Terminology", "Patient Care", "Diagnosis & Treatment", "Medical Records", "Emergency Medicine", "Pharmacy", "Medical Research", "Healthcare Systems"][i]}`,
      description: `Learn medical English for ${["basic terms", "patient interaction", "clinical practice", "documentation", "urgent care", "medications", "scientific studies", "health administration"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Patient",
          partOfSpeech: "n",
          translation: "Bệnh nhân",
          example: "The patient is recovering well.",
          exampleTranslation: "Bệnh nhân đang hồi phục tốt.",
        },
        {
          term: "Diagnosis",
          partOfSpeech: "n",
          translation: "Chẩn đoán",
          example: "The doctor made a diagnosis based on the symptoms.",
          exampleTranslation: "Bác sĩ đã đưa ra chẩn đoán dựa trên các triệu chứng.",
        },
        {
          term: "Treatment",
          partOfSpeech: "n",
          translation: "Điều trị",
          example: "The treatment plan includes medication and therapy.",
          exampleTranslation: "Kế hoạch điều trị bao gồm thuốc và trị liệu.",
        },
        {
          term: "Symptom",
          partOfSpeech: "n",
          translation: "Triệu chứng",
          example: "A fever is a common symptom of illness.",
          exampleTranslation: "Sốt là triệu chứng phổ biến của bệnh.",
        },
        {
          term: "Medication",
          partOfSpeech: "n",
          translation: "Thuốc",
          example: "He prescribed medication for the patient.",
          exampleTranslation: "Anh ấy đã kê thuốc cho bệnh nhân.",
        },
      ],
    })),
  },
  {
    id: "tourism-english",
    slug: "ta-tmcb04",
    name: "Tiếng Anh TMCB 4",
    description: "English for hospitality and tourism industry",
    color: "bg-chart-4",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Tourism Basics", "Hotel Services", "Travel Planning", "Tour Guiding", "Food & Beverage", "Customer Service", "Cultural Heritage", "Event Management"][i]}`,
      description: `Develop tourism English for ${["industry fundamentals", "accommodation", "itinerary creation", "leading tours", "restaurant service", "guest relations", "local attractions", "organizing events"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Hotel",
          partOfSpeech: "n",
          translation: "Khách sạn",
          example: "We are staying at a hotel near the beach.",
          exampleTranslation: "Chúng tôi đang ở khách sạn gần bãi biển.",
        },
        {
          term: "Reservation",
          partOfSpeech: "n",
          translation: "Đặt phòng",
          example: "I made a reservation for our stay.",
          exampleTranslation: "Tôi đã đặt phòng cho kỳ nghỉ của chúng tôi.",
        },
        {
          term: "Guest",
          partOfSpeech: "n",
          translation: "Khách",
          example: "The hotel staff is very attentive to guests.",
          exampleTranslation: "Nhân viên khách sạn rất chú ý đến khách hàng.",
        },
        {
          term: "Itinerary",
          partOfSpeech: "n",
          translation: "Lịch trình",
          example: "Here is your itinerary for the trip.",
          exampleTranslation: "Đây là lịch trình cho chuyến đi của bạn.",
        },
        {
          term: "Accommodation",
          partOfSpeech: "n",
          translation: "Chỗ ở",
          example: "The accommodation is comfortable and clean.",
          exampleTranslation: "Chỗ ở thoải mái và sạch sẽ.",
        },
      ],
    })),
  },
  {
    id: "it-english",
    slug: "ta-tmcb05",
    name: "Tiếng Anh TMCB 5",
    description: "English for information technology and software development",
    color: "bg-chart-5",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Business Conversation", "Business Correspondence", "Business Meetings", "Marketing", "Customer Service", "Negotiation", "Human Resources", "Business Plan"][i]}`,
      description: `Practice IT English for ${["computer basics", "coding concepts", "network systems", "data storage", "security protocols", "website creation", "cloud services", "artificial intelligence"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary:
        i === 0
          ? [
            {
              term: "Relevant",
              partOfSpeech: "adj",
              translation: "Liên quan",
              example: "This information is relevant to our discussion.",
              exampleTranslation: "Thông tin này liên quan đến cuộc thảo luận của chúng ta.",
            },
            {
              term: "Specific",
              partOfSpeech: "adj",
              translation: "Cụ thể",
              example: "Can you provide a specific example?",
              exampleTranslation: "Bạn có thể cung cấp một ví dụ cụ thể không?",
            },
            {
              term: "Refrain from",
              partOfSpeech: "v",
              translation: "Kiềm chế (làm một việc gì)",
              example: "Please refrain from making personal comments.",
              exampleTranslation: "Vui lòng kiềm chế không bình luận cá nhân.",
            },
            {
              term: "Religion",
              partOfSpeech: "n",
              translation: "Tôn giáo",
              example: "We should avoid discussing religion at work.",
              exampleTranslation: "Chúng ta nên tránh thảo luận về tôn giáo tại nơi làm việc.",
            },
            {
              term: "Marital status",
              partOfSpeech: "n",
              translation: "Tình trạng hôn nhân",
              example: "Marital status is a personal matter.",
              exampleTranslation: "Tình trạng hôn nhân là vấn đề cá nhân.",
            },
            {
              term: "Gossip about",
              partOfSpeech: "v",
              translation: "Buôn chuyện",
              example: "It's unprofessional to gossip about colleagues.",
              exampleTranslation: "Buôn chuyện về đồng nghiệp là không chuyên nghiệp.",
            },
            {
              term: "Gossip",
              partOfSpeech: "n",
              translation: "Chuyện phiếm",
              example: "Office gossip can damage relationships.",
              exampleTranslation: "Chuyện phiếm văn phòng có thể làm hỏng mối quan hệ.",
            },
            {
              term: "Small talk",
              partOfSpeech: "n",
              translation: "Chuyện xã giao",
              example: "Small talk helps break the ice in meetings.",
              exampleTranslation: "Chuyện xã giao giúp phá vỡ sự im lặng trong cuộc họp.",
            },
            {
              term: "Promotion",
              partOfSpeech: "n",
              translation: "Sự thăng tiến",
              example: "She received a promotion for her hard work.",
              exampleTranslation: "Cô ấy được thăng tiến vì làm việc chăm chỉ.",
            },
            {
              term: "Congratulate",
              partOfSpeech: "v",
              translation: "Chúc mừng",
              example: "We should congratulate him on his achievement.",
              exampleTranslation: "Chúng ta nên chúc mừng anh ấy về thành tích của mình.",
            },
            {
              term: "Compliment",
              partOfSpeech: "v",
              translation: "Khen ngợi",
              example: "It's good to compliment your colleagues' work.",
              exampleTranslation: "Thật tốt khi khen ngợi công việc của đồng nghiệp.",
            },
            {
              term: "Etiquette",
              partOfSpeech: "n",
              translation: "Quy tắc ứng xử",
              example: "Business etiquette is important in professional settings.",
              exampleTranslation: "Quy tắc ứng xử kinh doanh rất quan trọng trong môi trường chuyên nghiệp.",
            },
            {
              term: "Courtesy",
              partOfSpeech: "n",
              translation: "Tác phong lịch sự, sự lịch sự",
              example: "Show courtesy to all your colleagues.",
              exampleTranslation: "Hãy thể hiện sự lịch sự đối với tất cả đồng nghiệp.",
            },
            {
              term: "Neutral",
              partOfSpeech: "adj",
              translation: "Trung lập, trung tính",
              example: "Try to maintain a neutral tone in discussions.",
              exampleTranslation: "Cố gắng duy trì một giọng điệu trung lập trong cuộc thảo luận.",
            },
            {
              term: "Perspective",
              partOfSpeech: "n",
              translation: "Góc nhìn",
              example: "Different perspectives lead to better solutions.",
              exampleTranslation: "Các góc nhìn khác nhau dẫn đến các giải pháp tốt hơn.",
            },
            {
              term: "Viewpoint",
              partOfSpeech: "n",
              translation: "Góc nhìn",
              example: "I appreciate your viewpoint on this matter.",
              exampleTranslation: "Tôi đánh giá cao góc nhìn của bạn về vấn đề này.",
            },
            {
              term: "Insight",
              partOfSpeech: "n",
              translation: "Sự hiểu biết sâu sắc về một vấn đề",
              example: "Your insight into the problem is valuable.",
              exampleTranslation: "Sự hiểu biết sâu sắc của bạn về vấn đề này rất quý giá.",
            },
            {
              term: "Transfer",
              partOfSpeech: "v",
              translation: "Chuyển cuộc gọi",
              example: "I'll transfer your call to the manager.",
              exampleTranslation: "Tôi sẽ chuyển cuộc gọi của bạn cho người quản lý.",
            },
            {
              term: "Connect",
              partOfSpeech: "v",
              translation: "Kết nối",
              example: "Let me connect you with the right department.",
              exampleTranslation: "Để tôi kết nối bạn với bộ phận phù hợp.",
            },
            {
              term: "Bring up",
              partOfSpeech: "v",
              translation: "Đề cập",
              example: "I want to bring up an important issue.",
              exampleTranslation: "Tôi muốn đề cập đến một vấn đề quan trọng.",
            },
          ]
          : i === 1
            ? [
              {
                term: "Appreciate",
                partOfSpeech: "v",
                translation: "trân trọng, ghi nhận",
                example: "We appreciate your prompt payment.",
                exampleTranslation: "Chúng tôi ghi nhận việc thanh toán nhanh chóng của bạn."
              },
              {
                term: "Attach",
                partOfSpeech: "v",
                translation: "đính kèm",
                example: "Please attach the report to your email.",
                exampleTranslation: "Vui lòng đính kèm báo cáo vào email của bạn."
              },
              {
                term: "Attachment",
                partOfSpeech: "n",
                translation: "tài liệu đính kèm (dành cho email)",
                example: "The attachment contains the meeting agenda.",
                exampleTranslation: "Tài liệu đính kèm chứa chương trình nghị sự của cuộc họp."
              },
              {
                term: "Enclosure",
                partOfSpeech: "n",
                translation: "tài liệu đính kèm (dành cho thư tay)",
                example: "The enclosure with this letter is my resume.",
                exampleTranslation: "Tài liệu đính kèm với lá thư này là sơ yếu lý lịch của tôi."
              },
              {
                term: "Complain about",
                partOfSpeech: "phr v",
                translation: "phàn nàn về",
                example: "Customers complain about the slow service.",
                exampleTranslation: "Khách hàng phàn nàn về dịch vụ chậm chạp."
              },
              {
                term: "Complaint",
                partOfSpeech: "n",
                translation: "lời phàn nàn",
                example: "We have received a complaint from a customer.",
                exampleTranslation: "Chúng tôi đã nhận được một lời phàn nàn từ một khách hàng."
              },
              {
                term: "Contact",
                partOfSpeech: "v",
                translation: "liên hệ",
                example: "You can contact me by phone or email.",
                exampleTranslation: "Bạn có thể liên hệ với tôi qua điện thoại hoặc email."
              },
              {
                term: "Postpone",
                partOfSpeech: "v",
                translation: "trì hoãn",
                example: "We have to postpone the meeting until next week.",
                exampleTranslation: "Chúng ta phải hoãn cuộc họp đến tuần sau."
              },
              {
                term: "Put off",
                partOfSpeech: "phr v",
                translation: "Trì hoãn (thân mật)",
                example: "Don't put off your homework until the last minute.",
                exampleTranslation: "Đừng trì hoãn bài tập về nhà của bạn cho đến phút cuối cùng."
              },
              {
                term: "Require",
                partOfSpeech: "v",
                translation: "Yêu cầu",
                example: "This job requires a lot of experience.",
                exampleTranslation: "Công việc này đòi hỏi rất nhiều kinh nghiệm."
              },
              {
                term: "Hesitate",
                partOfSpeech: "v",
                translation: "ngần ngại, do dự",
                example: "Don't hesitate to ask if you have any questions.",
                exampleTranslation: "Đừng ngần ngại hỏi nếu bạn có bất kỳ câu hỏi nào."
              },
              {
                term: "Damage",
                partOfSpeech: "n",
                translation: "thiệt hại",
                example: "The storm caused a lot of damage to the building.",
                exampleTranslation: "Cơn bão đã gây ra nhiều thiệt hại cho tòa nhà."
              },
              {
                term: "Assistance",
                partOfSpeech: "n",
                translation: "sự hỗ trợ",
                example: "We need your assistance to complete this project.",
                exampleTranslation: "Chúng tôi cần sự hỗ trợ của bạn để hoàn thành dự án này."
              },
              {
                term: "Subject",
                partOfSpeech: "n",
                translation: "tiêu đề thư email",
                example: "The subject of the email was 'Meeting Confirmation'.",
                exampleTranslation: "Chủ đề của email là 'Xác nhận cuộc họp'."
              },
              {
                term: "Signature",
                partOfSpeech: "n",
                translation: "chữ ký",
                example: "Please put your signature at the bottom of the page.",
                exampleTranslation: "Vui lòng đặt chữ ký của bạn ở cuối trang."
              },
              {
                term: "Spam",
                partOfSpeech: "n",
                translation: "thư rác",
                example: "My inbox is full of spam.",
                exampleTranslation: "Hộp thư đến của tôi đầy thư rác."
              },
              {
                term: "Long-standing",
                partOfSpeech: "adj",
                translation: "lâu dài",
                example: "We have a long-standing relationship with this client.",
                exampleTranslation: "Chúng tôi có mối quan hệ lâu dài với khách hàng này."
              },
              {
                term: "Prompt",
                partOfSpeech: "adj",
                translation: "nhanh",
                example: "Thank you for your prompt reply.",
                exampleTranslation: "Cảm ơn bạn đã trả lời nhanh chóng."
              },
              {
                term: "Formal",
                partOfSpeech: "adj",
                translation: "trang trọng",
                example: "This is a formal event, so please dress appropriately.",
                exampleTranslation: "Đây là một sự kiện trang trọng, vì vậy vui lòng ăn mặc phù hợp."
              },
              {
                term: "Informal",
                partOfSpeech: "adj",
                translation: "thân mật",
                example: "You can use informal language with your friends.",
                exampleTranslation: "Bạn có thể sử dụng ngôn ngữ thân mật với bạn bè của mình."
              },
              {
                term: "Concerning",
                partOfSpeech: "prep",
                translation: "Về, liên quan đến",
                example: "I am writing to you concerning the job opening.",
                exampleTranslation: "Tôi viết thư cho bạn về việc mở cửa việc làm."
              },
              {
                term: "Regarding",
                partOfSpeech: "prep",
                translation: "Về, liên quan đến",
                example: "I have a question regarding your new product.",
                exampleTranslation: "Tôi có một câu hỏi liên quan đến sản phẩm mới của bạn."
              },
              {
                term: "With regard to",
                partOfSpeech: "prep",
                translation: "Về, liên quan đến",
                example: "With regard to your request, we have decided to approve it.",
                exampleTranslation: "Về yêu cầu của bạn, chúng tôi đã quyết định phê duyệt nó."
              },
              {
                term: "With reference to",
                partOfSpeech: "prep",
                translation: "Theo, theo như",
                example: "With reference to our conversation, I am sending you the details.",
                exampleTranslation: "Theo như cuộc trò chuyện của chúng ta, tôi đang gửi cho bạn các chi tiết."
              },
              {
                term: "Look forward to",
                partOfSpeech: "phr v",
                translation: "Mong đợi",
                example: "I look forward to hearing from you soon.",
                exampleTranslation: "Tôi mong sớm nhận được phản hồi từ bạn."
              },
              {
                term: "Regret",
                partOfSpeech: "v",
                translation: "tiếc",
                example: "We regret to inform you that your application has been rejected.",
                exampleTranslation: "Chúng tôi rất tiếc phải thông báo với bạn rằng đơn đăng ký của bạn đã bị từ chối."
              }
            ]
            : i === 3
              ? [
                {
                  term: "Advertise",
                  partOfSpeech: "v",
                  translation: "quảng cáo",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Endorse",
                  partOfSpeech: "v",
                  translation: "xác nhận chất lượng",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Convince/Persuade",
                  partOfSpeech: "v",
                  translation: "thuyết phục (Persuasive: (adj) có tính thuyết phục)",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Identify",
                  partOfSpeech: "v",
                  translation: "nhận biết, xác định",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Effective",
                  partOfSpeech: "adj",
                  translation: "Hiệu quả",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Beneficial",
                  partOfSpeech: "adj",
                  translation: "có lợi",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Eye-catching",
                  partOfSpeech: "adj",
                  translation: "bắt mắt",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Informative",
                  partOfSpeech: "adj",
                  translation: "nhiều thông tin",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Ultimate",
                  partOfSpeech: "adj",
                  translation: "tối ưu, tốt nhất",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Static",
                  partOfSpeech: "adj",
                  translation: "ở trạng thái tĩnh",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Animated",
                  partOfSpeech: "adj",
                  translation: "ở trạng thái động",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Slogan",
                  partOfSpeech: "n",
                  translation: "khẩu hiệu",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Poster",
                  partOfSpeech: "n",
                  translation: "áp phích quảng cáo",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Leaflet",
                  partOfSpeech: "n",
                  translation: "tờ rơi",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Exhibition",
                  partOfSpeech: "n",
                  translation: "triển lãm",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Commercial",
                  partOfSpeech: "n",
                  translation: "quảng cáo trên truyền hình",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Billboard",
                  partOfSpeech: "n",
                  translation: "bảng thông cáo",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Sample",
                  partOfSpeech: "n",
                  translation: "hàng mẫu",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Press",
                  partOfSpeech: "v",
                  translation: "nhấn",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Pop-up",
                  partOfSpeech: "n",
                  translation: "quảng cáo ăn theo",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Opportunity",
                  partOfSpeech: "n",
                  translation: "Cơ hội",
                  example: "",
                  exampleTranslation: "",
                },
                {
                  term: "Threat",
                  partOfSpeech: "n",
                  translation: "mối đe dọa",
                  example: "",
                  exampleTranslation: "",
                },
              ]
              : [
                {
                  term: "Sample",
                  partOfSpeech: "n",
                  translation: "Mẫu",
                  example: "This is a sample vocabulary.",
                  exampleTranslation: "Đây là từ vựng mẫu.",
                },
              ],
    })),
  },
  {
    id: "legal-english",
    slug: "ta-tm",
    name: "Tiếng Anh Thương Mại",
    description: "English for law and legal professionals",
    color: "bg-chart-2",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Legal System", "Contract Law", "Criminal Law", "Civil Procedure", "Corporate Law", "Intellectual Property", "International Law", "Legal Writing"][i]}`,
      description: `Study legal English for ${["court systems", "agreements", "criminal cases", "lawsuits", "business law", "patents & trademarks", "global regulations", "legal documents"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Legal",
          partOfSpeech: "adj",
          translation: "Pháp lý",
          example: "This document is legal.",
          exampleTranslation: "Tài liệu này là hợp pháp.",
        },
        {
          term: "Contract",
          partOfSpeech: "n",
          translation: "Hợp đồng",
          example: "The contract outlines the terms and conditions.",
          exampleTranslation: "Hợp đồng quy định các điều khoản và điều kiện.",
        },
        {
          term: "Law",
          partOfSpeech: "n",
          translation: "Luật",
          example: "The law protects citizens' rights.",
          exampleTranslation: "Luật bảo vệ quyền lợi của công dân.",
        },
        {
          term: "Court",
          partOfSpeech: "n",
          translation: "Tòa án",
          example: "The case will be heard in court.",
          exampleTranslation: "Vụ việc sẽ được tòa án xem xét.",
        },
        {
          term: "Justice",
          partOfSpeech: "n",
          translation: "Công lý",
          example: "Justice is served by the courts.",
          exampleTranslation: "Công lý được tòa án thực hiện.",
        },
      ],
    })),
  },
]

export function getCourse(courseSlug: string) {
  return courses.find((c) => c.slug === courseSlug)
}

export function getUnit(courseSlug: string, unitSlug: string) {
  const course = getCourse(courseSlug)
  return course?.units.find((u) => u.slug === unitSlug)
}

export function getSkill(courseSlug: string, unitSlug: string, skillId: string) {
  const unit = getUnit(courseSlug, unitSlug)
  return unit?.skills.find((s) => s.id === skillId)
}
